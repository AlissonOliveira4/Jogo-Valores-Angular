export default `<!DOCTYPE html><html lang="en" data-beasties-container><head>
  <meta charset="utf-8">
  <title>JogoValoresAngular</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="assets/favicon.ico">
<style>@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq0N6WXV0poK5.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq0N6WXx0poK5.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq0N6WXd0poK5.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq0N6WXZ0poK5.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq0N6WXh0pg.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w0aXpsog.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w9aXpsog.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w2aXpsog.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w3aXpsog.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w5aXo.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}*{padding:0;margin:0;font-family:Montserrat,sans-serif;text-align:center;font-optical-sizing:auto;font-weight:400;font-style:normal;color:#fff}body{padding:0;margin:0;color:#fff}html{background:#11c76f}button{margin-left:4%;margin-right:4%;padding:10px 20px;font-size:16px;cursor:pointer;border:none;background-color:#fff}
</style><link rel="stylesheet" href="styles-IIZWXFPQ.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-IIZWXFPQ.css"></noscript><style ng-app-id="ng">@font-face{font-family:Inter;font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCm3FwrK3iLTcvnUwkT9nA2.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCm3FwrK3iLTcvnUwAT9nA2.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCm3FwrK3iLTcvnUwgT9nA2.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCm3FwrK3iLTcvnUwcT9nA2.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCm3FwrK3iLTcvnUwsT9nA2.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCm3FwrK3iLTcvnUwoT9nA2.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCm3FwrK3iLTcvnUwQT9g.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcvvYwYL8g.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcvmYwYL8g.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcvuYwYL8g.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcvhYwYL8g.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcvtYwYL8g.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcvsYwYL8g.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcviYwY.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq0N6WXV0poK5.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq0N6WXx0poK5.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq0N6WXd0poK5.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq0N6WXZ0poK5.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq0N6WXh0pg.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w0aXpsog.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w9aXpsog.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w2aXpsog.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w3aXpsog.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w5aXo.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}*[_ngcontent-ng-c2283532919]{padding:0;margin:0;font-family:Montserrat,sans-serif;text-align:center;font-optical-sizing:auto;font-weight:400;font-style:normal}body[_ngcontent-ng-c2283532919]{padding:0;margin:0}html[_ngcontent-ng-c2283532919]{background:#11c76f}.App[_ngcontent-ng-c2283532919]{height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;background-color:#11c76f}body[_ngcontent-ng-c2283532919]{color:#fff}.principal[_ngcontent-ng-c2283532919]{display:flex;align-items:center;justify-content:center;flex-direction:column;padding:50px}.principal[_ngcontent-ng-c2283532919]   h1[_ngcontent-ng-c2283532919]{display:flex;width:320px;height:110px;align-items:center;justify-content:center;background-color:#426b1f;border:3px solid white;border-radius:15px;margin:20px}.principal[_ngcontent-ng-c2283532919]   p[_ngcontent-ng-c2283532919]{display:flex;flex-wrap:wrap;text-align:center;font-size:200%;margin:25px}.principal[_ngcontent-ng-c2283532919]   button[_ngcontent-ng-c2283532919]{height:50px;width:200px;margin:30px;border-radius:10px;border:none;background-color:#426b1f}button[_ngcontent-ng-c2283532919]{color:#fff}.info[_ngcontent-ng-c2283532919]{display:flex;width:30%;margin-right:3%;align-items:center;flex-direction:row}.info[_ngcontent-ng-c2283532919]   button[_ngcontent-ng-c2283532919]{margin-left:4%;margin-right:4%;color:#11c76f;padding:10px 20px;font-size:16px;cursor:pointer;border:none;background-color:#fff}.blurred[_ngcontent-ng-c2283532919]{filter:blur(5px);pointer-events:none}.overlay[_ngcontent-ng-c2283532919]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000c;display:flex;justify-content:center;align-items:flex-start;z-index:1000;overflow-y:auto;padding:20px}.overlay-content[_ngcontent-ng-c2283532919]{background-color:#fff;padding:20px;border-radius:8px;text-align:center;box-shadow:0 4px 8px #0003;width:50%;box-sizing:border-box}.overlay-content[_ngcontent-ng-c2283532919]   p[_ngcontent-ng-c2283532919]{background-color:#fff;color:#11c76f;padding:20px}.overlay-content[_ngcontent-ng-c2283532919]   table[_ngcontent-ng-c2283532919]{width:50%;margin:20px auto;border-collapse:collapse}.overlay-content[_ngcontent-ng-c2283532919]   :is(th[_ngcontent-ng-c2283532919], td[_ngcontent-ng-c2283532919]){border:1px solid black;padding:8px;text-align:center;color:#000}.overlay-content[_ngcontent-ng-c2283532919]   th[_ngcontent-ng-c2283532919]{background-color:#426b1f;font-weight:700}.overlay-content[_ngcontent-ng-c2283532919]   img[_ngcontent-ng-c2283532919]{width:60%}.overlay-content[_ngcontent-ng-c2283532919]   h3[_ngcontent-ng-c2283532919]{font-size:32px;background-color:#fff;color:#11c76f}.hidden[_ngcontent-ng-c2283532919]{display:none}button[_ngcontent-ng-c2283532919]{margin-left:4%;margin-right:4%;padding:10px 20px;font-size:16px;cursor:pointer;border:none;background-color:#fff}.closeOverlay[_ngcontent-ng-c2283532919]{background-color:#11c76f;padding:15px;border-radius:15px}</style><style ng-app-id="ng">.navbar[_ngcontent-ng-c3277541722]{display:flex;padding:0;margin:0;align-items:center;background-color:#fff;width:100%;height:70px;justify-content:space-between}.navbar[_ngcontent-ng-c3277541722]   .picpay[_ngcontent-ng-c3277541722]{margin-left:3%;background-color:#fff;width:150px}</style><style ng-app-id="ng">.info[_ngcontent-ng-c1937521609]{display:flex;width:30%;margin-right:10px;background-color:#fff;align-items:center;flex-direction:row}.info[_ngcontent-ng-c1937521609]   button[_ngcontent-ng-c1937521609]{margin-left:4%;margin-right:4%;color:#11c76f;padding:10px 20px;font-size:16px;cursor:pointer;border:none;background-color:#fff}</style><style ng-app-id="ng">@font-face{font-family:Inter;font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCm3FwrK3iLTcvnUwkT9nA2.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCm3FwrK3iLTcvnUwAT9nA2.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCm3FwrK3iLTcvnUwgT9nA2.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCm3FwrK3iLTcvnUwcT9nA2.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCm3FwrK3iLTcvnUwsT9nA2.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCm3FwrK3iLTcvnUwoT9nA2.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:italic;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCm3FwrK3iLTcvnUwQT9g.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Inter;font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcvvYwYL8g.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Inter;font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcvmYwYL8g.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Inter;font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcvuYwYL8g.woff2) format("woff2");unicode-range:U+1F00-1FFF}@font-face{font-family:Inter;font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcvhYwYL8g.woff2) format("woff2");unicode-range:U+0370-0377,U+037A-037F,U+0384-038A,U+038C,U+038E-03A1,U+03A3-03FF}@font-face{font-family:Inter;font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcvtYwYL8g.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Inter;font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcvsYwYL8g.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Inter;font-style:normal;font-weight:100 900;font-display:swap;src:url(https://fonts.gstatic.com/s/inter/v18/UcCo3FwrK3iLTcviYwY.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq0N6WXV0poK5.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq0N6WXx0poK5.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq0N6WXd0poK5.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq0N6WXZ0poK5.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Montserrat;font-style:italic;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUFjIg1_i6t8kCHKm459Wx7xQYXK0vOoz6jq0N6WXh0pg.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w0aXpsog.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C8A,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w9aXpsog.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w2aXpsog.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w3aXpsog.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v29/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w5aXo.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}*[_ngcontent-ng-c1562785735]{padding:0;margin:0;background-color:#11c76f;color:#fff;font-family:Montserrat,sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal}header[_ngcontent-ng-c1562785735]{display:flex;justify-content:space-between;margin:5px}header[_ngcontent-ng-c1562785735]   .temporizador[_ngcontent-ng-c1562785735]{margin:15px}header[_ngcontent-ng-c1562785735]   h3[_ngcontent-ng-c1562785735]{margin:15px}.grupo[_ngcontent-ng-c1562785735]{display:flex;align-items:center;justify-content:center;flex-direction:column}.grupo[_ngcontent-ng-c1562785735]   #valor[_ngcontent-ng-c1562785735]{display:flex;align-items:center;justify-content:space-around}.grupo[_ngcontent-ng-c1562785735]   #valor[_ngcontent-ng-c1562785735]   h1[_ngcontent-ng-c1562785735]{display:flex;width:300px;height:100px;align-items:center;justify-content:center;margin:15px;background-color:#426b1f;border:3px solid white;border-radius:15px}.grupo[_ngcontent-ng-c1562785735]   #valor[_ngcontent-ng-c1562785735]   img[_ngcontent-ng-c1562785735]{width:12%;height:50%}.grupo[_ngcontent-ng-c1562785735]   p[_ngcontent-ng-c1562785735]{margin:15px;display:flex;font-size:24px;width:65%;justify-content:center;flex-wrap:wrap;text-align:center}.grupo[_ngcontent-ng-c1562785735]   ul[_ngcontent-ng-c1562785735]{display:flex;justify-content:center;align-items:center;flex-direction:row;flex-wrap:wrap;list-style:none;width:80%;margin:15px}.grupo[_ngcontent-ng-c1562785735]   ul[_ngcontent-ng-c1562785735]   li[_ngcontent-ng-c1562785735]{display:flex;width:150px;height:200px;text-align:center;align-items:center;border:2px solid black;border-radius:15px;margin:25px}#a[_ngcontent-ng-c1562785735]{background-color:red}#c[_ngcontent-ng-c1562785735]{background-color:green}#b[_ngcontent-ng-c1562785735]{background-color:gray!important}#d[_ngcontent-ng-c1562785735]{background-color:#00f}#e[_ngcontent-ng-c1562785735]{background-color:#ff4500}.grupo[_ngcontent-ng-c1562785735]   button[_ngcontent-ng-c1562785735]{height:50px;width:200px;border-radius:10px;border:none;background-color:#426b1f;cursor:pointer}.grupo[_ngcontent-ng-c1562785735]   button[_ngcontent-ng-c1562785735]:hover{background-color:#fff;color:#426b1f;border:2px solid #426B1F}.default[_ngcontent-ng-c1562785735]{border:2px solid black}.selected[_ngcontent-ng-c1562785735]{border:2px solid yellow!important}.highlight[_ngcontent-ng-c1562785735]{border-color:#ff0}.overlay[_ngcontent-ng-c1562785735]{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000c;display:flex;justify-content:center;align-items:center;z-index:1000;overflow-y:auto;padding:20px}.overlay_content[_ngcontent-ng-c1562785735]{background:#fff;padding:20px;border-radius:8px;text-align:center;box-shadow:0 4px 8px #0003;width:50%;box-sizing:border-box}.overlay_content[_ngcontent-ng-c1562785735]   .imagem[_ngcontent-ng-c1562785735]{background-color:#fff;display:flex;align-items:center;justify-content:center}.overlay_content[_ngcontent-ng-c1562785735]   .imagem[_ngcontent-ng-c1562785735]   img[_ngcontent-ng-c1562785735]{background-color:#fff;width:20%}.overlay_content[_ngcontent-ng-c1562785735]   .hidden[_ngcontent-ng-c1562785735]{display:none}.overlay_content[_ngcontent-ng-c1562785735]   p[_ngcontent-ng-c1562785735]{display:flex;font-size:18px;background-color:#fff;color:#11c76f;padding:20px;flex-wrap:wrap;text-align:center;margin:15px}.hidden[_ngcontent-ng-c1562785735]{display:none}</style></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click"],[]);</script>
  <app-root ng-version="19.1.4" _nghost-ng-c2283532919 ngh="2" ng-server-context="ssg"><app-nav-bar _ngcontent-ng-c2283532919 _nghost-ng-c3277541722 ngh="1"><nav _ngcontent-ng-c3277541722 class="navbar"><img _ngcontent-ng-c3277541722 src="assets/picpay.png" alt="picpay" id="picpay" class="picpay"><app-overlay _ngcontent-ng-c3277541722 _nghost-ng-c1937521609 ngh="0"><div _ngcontent-ng-c1937521609 class="info"><button _ngcontent-ng-c1937521609 jsaction="click:;">Tutorial</button><button _ngcontent-ng-c1937521609 jsaction="click:;">Regras</button><button _ngcontent-ng-c1937521609 jsaction="click:;">Ranking</button></div><!----></app-overlay></nav></app-nav-bar><router-outlet _ngcontent-ng-c2283532919></router-outlet><!----></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-TFTL3LJZ.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{"t":{"7":"t0"},"c":{"7":[]}},{},{"c":{"1":[]}}]}</script></body></html>`;