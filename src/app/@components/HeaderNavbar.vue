<style lang="scss">
  body.collapse-mask::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
  }

  nav.header-navbar {
    border-bottom-width: 8px !important;

    ul.navbar-nav {
      a.nav-link:not(.disabled),
      a.dropdown-item:not(.disabled) {
        cursor: pointer;
        color: #856404;
      }

      a.nav-link.disabled,
      a.dropdown-item.disabled {
        cursor: not-allowed;
        color: #6c757d;
        opacity: .6;
      }

      a.dropdown-item:hover:not(.disabled) {
        background-color: #ffc107!important;
      }

      > li:not(.active):not(.show) > a.nav-link:not(.disabled) {
        opacity: .5;
      }

      div.dropdown-menu {
        color: #856404;
        background-color: #fff3cd;
        border-color: #ffeeba;
      }
    }
  }

  @media (max-width: 765px) {
    nav.header-navbar div.navbar-collapse {
      position: fixed;
      padding: 12px 16px;
      width: 100%;
      left: 0;
      top: 62px;
    }
  }
</style>

<template>
  <nav class="header-navbar navbar navbar-dark navbar-expand-md bg-warning border-bottom border-light">
    <a class="navbar-brand" href="/">
      <!-- Slot Example -->
      <slot name="icon" />
    </a>

    <button type="button" class="navbar-toggler font-weight-bold" @click="onCollapseNavbar()">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse bg-warning rounded-bottom font-weight-bold" :id="collapseID">
      <ul class="navbar-nav mr-auto">
        <li v-for="route in routes" :key="`${route.name}-link`" class="nav-item" :class="{
          active: isActived(route.name)
        }">
          <router-link class="nav-link" :to="route.path">
            <i v-if="route.meta" :class="[route.meta.iconCls]" /> {{$t(route.name)}}
          </router-link>
        </li>
      </ul>

      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-language" /> {{$t('hnavbar.label.lauguage')}}
          </a>

          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" :class="{disabled: 'en-us' === currentLang}" @click="onChangeLanguage('en-us')">English</a>
            <a class="dropdown-item" :class="{disabled: 'zh-tw' === currentLang}" @click="onChangeLanguage('zh-tw')">繁體中文</a>

            <div class="dropdown-divider"></div>

            <a class="dropdown-item" @click="onChangeLanguage()">
              <i class="fa fa-repeat" /> {{$t('hnavbar.option.defaultLang')}}
            </a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator';

  import Router, { RouteConfig } from 'vue-router';
  import v4 from 'uuid/v4';
  import i18n, { setLocaleMessages } from '@/services/I18nService';


  @Component({})
  export default class HeaderNavbar extends Vue {
    private collapseID = v4();

    @Prop()
    private router!: Router;

    get routes(): RouteConfig[] {
      return (this.router as any).options.routes as RouteConfig[];
    }

    get currentLang(): string {
      return i18n.locale;
    }

    created(): void {
      $('body')[0].addEventListener('click', this.onClickBody);
    }

    destroyed(): void {
      $('body')[0].removeEventListener('click', this.onClickBody);
    }

    isActived(routerName: string): boolean {
      return this.router.currentRoute.name === routerName
        || this.router.currentRoute.matched.findIndex(m => m.name === routerName) >= 0;
    }

    onCollapseNavbar(): void {
      const $collapse = $(`#${this.collapseID}`);
      const isVisible = $collapse.hasClass('show');

      ($collapse as any).collapse(isVisible ? 'hide' : 'show');
      ($('body') as any)[isVisible ? 'removeClass' : 'addClass']('collapse-mask');
    }

    onChangeLanguage(locale?: string): void {
      setLocaleMessages(locale);
    }


    private onClickBody(e: MouseEvent): void {
      const $collapse = $(`#${this.collapseID}`);

      if (e.target === $('body')[0] || $collapse
        .find('li.nav-item:not(.dropdown), li.nav-item.dropdown > div.dropdown-menu')
        .filter((i, $el) => $.contains($el, e.target as Element)).length > 0
      ) {
        ($collapse as any).collapse('hide');
        $('body').removeClass('collapse-mask');
      }
    }
  }
</script>