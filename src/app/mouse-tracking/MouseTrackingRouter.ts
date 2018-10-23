import { RouteConfig } from 'vue-router';

export default ([{
  path: 'logs',
  name: 'tracking.log.link',
  component: () => import('./@components/TrackingLogs.vue'),
  meta: {
    iconCls: 'fa fa-list-ul'
  }
}, {
  path: 'size',
  name: 'tracking.size.link',
  component: () => import('./@components/GraphicsSize.vue'),
  meta: {
    iconCls: 'fa fa-crop'
  }
}] as RouteConfig[]);