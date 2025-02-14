
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/determinacao"
  },
  {
    "renderMode": 2,
    "route": "/disponibilidade"
  },
  {
    "renderMode": 2,
    "route": "/franqueza"
  },
  {
    "renderMode": 2,
    "route": "/humildade"
  },
  {
    "renderMode": 2,
    "route": "/simplicidade"
  },
  {
    "renderMode": 2,
    "route": "/disciplina"
  },
  {
    "renderMode": 2,
    "route": "/atitudeDeDono"
  },
  {
    "renderMode": 2,
    "route": "/final"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4245, hash: '9d3452015d29be37bf728e7e2e042c4482af07947535dfe17e6fbb6b3e705349', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1035, hash: '7b09c4bc36848c84bafe19ee7b4ed27887bc282ffcbfbb1e10b904400fc60e26', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 18061, hash: '14cb3bf83debfa95922108761ac5e55efa86cad7907e1f795f2d0635cbac22ad', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 18052, hash: '33cfc6fcae5af0f0aef720068ab5aca8a832d1363df2806c9fb2e549a9d03a20', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'franqueza/index.html': {size: 27787, hash: 'fa90d22da561b3ab0a073b6dc3468892daaea5eb26a9bec0a0ba32eeeb0d0d20', text: () => import('./assets-chunks/franqueza_index_html.mjs').then(m => m.default)},
    'humildade/index.html': {size: 27787, hash: 'fa90d22da561b3ab0a073b6dc3468892daaea5eb26a9bec0a0ba32eeeb0d0d20', text: () => import('./assets-chunks/humildade_index_html.mjs').then(m => m.default)},
    'simplicidade/index.html': {size: 27787, hash: 'fa90d22da561b3ab0a073b6dc3468892daaea5eb26a9bec0a0ba32eeeb0d0d20', text: () => import('./assets-chunks/simplicidade_index_html.mjs').then(m => m.default)},
    'disciplina/index.html': {size: 27787, hash: 'fa90d22da561b3ab0a073b6dc3468892daaea5eb26a9bec0a0ba32eeeb0d0d20', text: () => import('./assets-chunks/disciplina_index_html.mjs').then(m => m.default)},
    'determinacao/index.html': {size: 27787, hash: 'fa90d22da561b3ab0a073b6dc3468892daaea5eb26a9bec0a0ba32eeeb0d0d20', text: () => import('./assets-chunks/determinacao_index_html.mjs').then(m => m.default)},
    'atitudeDeDono/index.html': {size: 27787, hash: 'fa90d22da561b3ab0a073b6dc3468892daaea5eb26a9bec0a0ba32eeeb0d0d20', text: () => import('./assets-chunks/atitudeDeDono_index_html.mjs').then(m => m.default)},
    'final/index.html': {size: 18057, hash: '25a93f065967734be3ae8f9297bfa37fdef9f31781e49974667eaeaf2ba5103f', text: () => import('./assets-chunks/final_index_html.mjs').then(m => m.default)},
    'disponibilidade/index.html': {size: 27787, hash: 'fa90d22da561b3ab0a073b6dc3468892daaea5eb26a9bec0a0ba32eeeb0d0d20', text: () => import('./assets-chunks/disponibilidade_index_html.mjs').then(m => m.default)},
    'styles-IIZWXFPQ.css': {size: 8606, hash: 'lkefn8pfX9o', text: () => import('./assets-chunks/styles-IIZWXFPQ_css.mjs').then(m => m.default)}
  },
};
