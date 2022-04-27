import { css, Global } from "@emotion/react";

export const globalStyle = (
  <Global
    styles={css`
      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }
      /* HTML5 display-role reset for older browsers */
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }
      body {
        line-height: 1;
      }
      ol,
      ul {
        list-style: none;
      }
      blockquote,
      q {
        quotes: none;
      }
      blockquote:before,
      blockquote:after,
      q:before,
      q:after {
        content: "";
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      /* custom style */
      body {
        background: rgb(2, 0, 36);
        background: linear-gradient(
          0deg,
          rgba(2, 0, 36, 1) 0%,
          rgba(65, 84, 161, 1) 0%,
          rgba(0, 212, 255, 1) 100%
        );
        background-size: auto 100%;
        background-repeat: no-repeat;
        height: 100vh;
      }
      /* add fonts */
      @font-face {
        font-family: "NotoSans-Black";
        src: url("../font/Noto_Sans/NotoSans-Black.ttf") format("ttf");
      }
      @font-face {
        font-family: "NotoSans-Bold";
        src: url("../font/Noto_Sans/NotoSans-Bold.ttf") format("ttf");
      }
      @font-face {
        font-family: "NotoSans-Light";
        src: url("../font/Noto_Sans/NotoSans-Light.ttf") format("ttf");
      }
      @font-face {
        font-family: "NotoSans-Regular";
        src: url("../font/Noto_Sans/NotoSans-Regular.ttf") format("ttf");
      }
      /* swiper */
      .swiper-slide-next {
        transform: scale(1.2) !important;
        transition: 0.2s;
      }
    `}
  />
);
