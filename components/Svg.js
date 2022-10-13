import styled from "styled-components";
import { motion } from "framer-motion";

const variants = {
  hidden: {},
  show: {
    transition: { delay: 1, duration: 2, ease: "easeInOut" },
  },
};

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  show: {
    pathLength: 1,
    transition: {
      delay: 1.5,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export const Svg = () => {
  return (
    <ContSvg>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        id="svg"
        variants={variants}
        initial="hidden"
        animate="show"
      >
        <motion.path
          variants={pathVariants}
          transform="matrix(1 0 0 .46 555.05 390.26)"
          d="M-6.964-6.964H6.964V6.964H-6.964z"
        />
        <motion.path
          variants={pathVariants}
          transform="matrix(1 0 0 .46 522.65 390.1)"
          d="M-6.964-6.964H6.964V6.964H-6.964z"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(285.3 528.88)"
          d="m-51.629 23.622 9.447-13.694 11.4-8.794 4.886-1.303-1.954-6.19 1.954-9.771v-5.538l13.03-1.954L2.443-18.41 34.365 6.345l11.726 10.75 5.538 6.527"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(353.87 459.82)"
          d="m-57.003 56.84 19.544-16.938 14.332-11.4 6.689-8.795 2.106-8.143 13.03-18.567 7.817-11.4 7.492-4.561 9.446-12.704L36.808-47.72l13.03-9.12h3.582l3.583 4.886v4.234l-13.355 9.446-9.446 10.75-7.818 10.423s-7.491 6.189-12.377 3.909"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(409.57 429.19)"
          d="m1.803-16.77 6.992-3.583 4.56-3.257 4.886-1.63 5.863 1.63 3.583 6.84-1.954 4.235-7.492 5.211L8.795-3.74.325 3.1l-6.514 7.493-6.84 6.84-3.583 3.909s-3.583 5.211-11.075 3.583"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(426.54 443.25)"
          d="m7.64-25.35 6.723-1.68 5.322 1.68 1.332 6.442-1.332 4.85-9.804 6.075-7.843 5.322-6.723 4.482-8.403 9.86s-12.045 10.588-6.443 15.35"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(435.45 460.52)"
          d="M12.116-31.328h3.71l3.082 1.312 1.96 4.202-1.96 4.762-6.792 7.563-4.973 7.9L2.31-.704l-8.053 8.783-6.443 8.964-8.683 14.285"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(396.17 511.64)"
          d="m28.77-33.797 5.041-3.081 7.773-2.801 9.805-1.18 5.672 1.18 1.68 4.482-1.68 5.602-8.964 2.24-6.513 8.064-12.815 8.743-5.042 3.664-1.68 2.779L4.754 1.497l-7.637 4.02-10.365 6.344h-7.282l-9.524 5.377-8.034 7.84-9.44 4.72-6.49 5.9-4.723 5.162"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(267.67 540.69)"
          d="M-7.227-11.811.147 4.584l7.08 7.227"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(282.42 530.67)"
          d="m-8.407 15.487 9.44-19.47 1.849-6.784 5.525-4.72"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(284.14 533.62)"
          d="M-7.182 14.307c.885-.295 8.339-19.55 8.339-19.55l1.985-6.114 4.04-2.95"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(290.68 532.79)"
          d="M-27.286-15.636S2.507-5.603 27.286 15.636"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(284.97 538.27)"
          d="M-22.079-14.233S-6.535-9.366 22.08 14.233"
        />
        <motion.path
          variants={pathVariants}
          d="M426.19 444.769h.819q.117 0 .35.233l.468.468q.233.233.35.467.117.234.35.467l.468.468q.234.233.234.35 0 .117.233.35l.235.235M425.023 448.039v.935q0 .234.117.468.117.233.233.233.117 0 .351.35.234.351.35.468l.234.234.35.35.351.35q.117.117.117.234t.117.234l.233.234q.117.116.35.233.234.117.234.234t.117.117q.117 0 .117.116 0 .117.234.117.233 0 .35.117l.118.118M414.274 431.918h-.115q-.117 0 0 0h.35q.234 0 .584.117t.584.35l.35.351.351.35q.234.234.234.468v.467q0 .234.117.584.116.35.116.584 0 .234.117.701.117.467.117.818v.467q0 .117.117.35l.118.235M412.639 435.656l.118.234q.116.234.233.35.117.117.35.585.234.467.351.584l.234.234q.117.116.234.35.116.234.233.35.117.117.467.35.35.235.35.468 0 .234.118.468l.118.234M397.92 426.778l.468.935q.467.934.817.934h.701q.35 0 .35.117t.117.117q.117 0 .234.233.117.234.584.468.468.233.584.233.117 0 .35.117l.235.118M383.433 423.272l.235.118q.234.117.584.584.35.468 1.051.818l.702.352M428.294 495.237v-.351q0-.117.117-.585.117-.467.117-.817v-3.037q0-.351-.117-.585l-.234-.467-.233-.467q-.117-.234-.234-.35-.117-.118-.117-.235V486.356M433.434 488.228v-1.754q0-.817.818-2.336l.819-1.52M417.312 414.862H418.714q.234 0 .351.234.117.233.234.233t.233.234q.117.234.35.584l.235.352M434.369 424.908l.233.235q.234.233.234.35v.234q0 .116.234.233.233.117.233.234v.467q0 .117.117.117h.819M443.715 438.46l.116.117q.117.117.117.35v1.285q0 .117.117.234l.234.234q.117.117.35.234.234.116.467.467l.235.351M392.312 415.797l.351.233.352.234"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(389.55 462.61)"
          d="m-6.62 7.675 3.573-6.426 9.666-8.924"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(403.49 483.99)"
          d="m-6.075 1.87 8.837-3.74 3.313 3.74"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(674.15 482.65)"
          d="m12.415 70.35-2.381-44.101 2.381-13.162V1.337l4.422-19.986 1.7-16.462-10.884-9.78L-3.23-68.288l-5.783-2.062h-6.802l-2.721 3.418v3.385l4.081 6.54s4.082 12.461 2.721 28.788c-1.36 16.326 7.143 21.815 7.143 21.815"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(645.69 486.31)"
          d="M12.35-63.542s-9.904-8.296-16.667 4.506c-1.72 3.254.095 5.469 0 7.877-.278 7.066 2.174 11.132 2.174 11.132S.272-21.1-8.906-8.54c-9.18 12.56 2.898 28.744 2.898 28.744l4.831 10.638L1.24 37.22.272 47.307-3.35 62.113l-2.657 4.073"
        />
        <motion.path
          variants={pathVariants}
          d="M663.837 439.939h1.45q.242 0 .846-.12.604-.122.845-.122.242 0 .483-.241l.363-.363q.12-.12.362-.241.241-.12.362-.242.12-.12.242-.362.12-.241.241-.604l.122-.363"
        />
        <motion.path
          variants={pathVariants}
          d="M666.978 439.698h.12q.122 0 .122-.121t.12-.121h.725q.12 0 .604-.121.483-.12.604-.242.12-.12.483-.241.362-.12.725-.362l.363-.243M664.427 453.67l.082.001q.082 0 .49.082.41.082.572.164.164.081.736.245.572.163.817.245.245.081.898.081h5.23M665.08 460.534h.982q.49 0 .98.082t1.634.082q1.144 0 1.552.245.409.245.654.327.245.081.49.326l.572.572.49.49q.164.164.409.49.245.327.408.41l.165.082"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(634.11 448.77)"
          d="m.55 29.143-4.904-7.134a8.373 8.373 0 0 0-1.1-7.516l-.253-.357a7.52 7.52 0 0 1-1.009-6.69l1-3.047.003-.003a5.945 5.945 0 0 0 1.599-6.12l-.24-.76V-4.76c0-1.148.41-2.26 1.155-3.133l1.934-2.269v-5.654l.936-2.926a14.333 14.333 0 0 1 2.757-4.947l4.662-5.454"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(631.18 382.27)"
          d="m12.183 40.5-2.845-3.643V33.76s-42.43 6.617-47.535-35.086c-4.08-33.33 36.62-39.063 36.62-39.063s28.52-3.169 37.852 24.296c9.33 27.465-13.909 44.014-13.909 44.014L10.522 33.76"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(653.39 414.36)"
          d="M-1.227-2.98V.716c0 .892.58 1.681 1.432 1.946l1.022.318"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(637.27 440.34)"
          d="M-4.428-1.363S-.374 3.935 4.428-.24"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(636.68 449.94)"
          d="M-6.674-1.166S-1.05 7.622 6.674-2.399"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(635.6 467)"
          d="M-6.093-1.299s8.22 5.846 12.186 0"
        />
        <motion.path
          variants={pathVariants}
          d="M649.15 433.676h3.254q.171 0 .856-.171l.686-.173M631.651 452.7v.374q0 .124-.248.62t-.248.868V456.051q0 .372-.124.496-.124.125-.124.249v.496q0 .124-.124.372t-.249.372q-.124.124-.124.248v.249q0 .124-.124.124h-.248q-.124 0-.496.124l-.373.125M633.89 443.247h.002M635.822 432.62l-.24.482-.241.483M659.427 483.469l-.266.001q-.266 0-.266.532v2.394q0 1.33.266 1.861.266.532.532.798l.798.798q.532.532.532.798t.266.532q.266.266.532.266h.532q.266 0 .266.266t.532.798l.797.797q.266.266.532.798t.266 1.596v1.065"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(630.46 379.03)"
          d="M-9.03 27.376S-35.607 16.125-28.174-9.1C-20.742-34.326 9.664-27.12 9.664-27.12S35.736-14.28 28.078 9.593C20.42 33.467-9.03 27.376-9.03 27.376z"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(445.84 356.03)"
          d="M-149.47-118.69H142.3l7.17 3.187-12.35 43.426-5.18 3.586H99.67v9.562H-91.967v-9.562h-29.877l-7.57 3.586-3.187 5.976v169.68l5.23 7.94h18.466"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(520.08 383)"
          d="M-63.27 94.916H53.708l7.172-5.37 2.39-3.75V-82.998l-2.39-7.934-4.781-3.984H24.598"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(461.15 437.1)"
          d="M-30.95 31.694h60.017l1.882-1.8V-28.06l-4.032-3.133-55.129-.5"
        />
        <motion.path
          variants={pathVariants}
          transform="matrix(1.07 0 0 1.07 416.81 405.41)"
          d="M5.737 0H-5.737"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(447.29 260.95)"
          d="M98.615 26.63H-123.49l-7.017-2.032-20.415-48.495 1.818-2.733h294.007l6.02 4.21-14.357 44.912"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(450.04 353.55)"
          d="M-117.143-46.964h234.286v93.928l-234.286-1.785v-90.715"
        />
        <motion.path
          variants={pathVariants}
          transform="matrix(1.8 0 0 .83 348.43 354.98)"
          d="M-6.964-6.964H6.964V6.964H-6.964z"
        />
        <motion.path
          variants={pathVariants}
          transform="matrix(1.54 0 0 .83 346.66 337.65)"
          d="M-6.964-6.964H6.964V6.964H-6.964z"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(414.08 316.94)"
          d="M0 0h13.929v13.929H0z"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(397.71 316.94)"
          d="M0 0h13.929v13.929H0z"
        />
        <motion.path
          variants={pathVariants}
          transform="matrix(1 0 0 .91 432.93 354.4)"
          d="M-6.964-6.964H6.964V6.964H-6.964z"
        />
        <motion.path
          variants={pathVariants}
          transform="matrix(1 0 0 .91 441.72 370.89)"
          d="M-6.964-6.964H6.964V6.964H-6.964z"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(379.55 346.8)"
          d="M0 0h13.929v13.929H0z"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(364.62 378.26)"
          d="M0 0h13.929v13.929H0z"
        />
        <motion.path
          variants={pathVariants}
          transform="matrix(1 0 0 .46 373.92 311.84)"
          d="M-6.964-6.964H6.964V6.964H-6.964z"
        />
        <motion.path
          variants={pathVariants}
          transform="matrix(1 0 0 .46 390.4 311.87)"
          d="M-6.964-6.964H6.964V6.964H-6.964z"
        />
        <motion.path
          variants={pathVariants}
          transform="matrix(1 0 0 .46 474.69 311.87)"
          d="M-6.964-6.964H6.964V6.964H-6.964z"
        />
        <motion.path
          variants={pathVariants}
          transform="matrix(1 0 0 .46 538.61 381.51)"
          d="M-6.964-6.964H6.964V6.964H-6.964z"
        />
        <motion.path
          variants={pathVariants}
          transform="matrix(1 0 0 .46 538.61 390.26)"
          d="M-6.964-6.964H6.964V6.964H-6.964z"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(454.19 331.87)"
          d="M0 0h13.929v13.929H0z"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(493.1 318.23)"
          d="M0 0h13.929v13.929H0z"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(498.2 379.59)"
          d="M0 0h13.929v13.929H0z"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(505.66 346.8)"
          d="M0 0h13.929v13.929H0z"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(522.35 346.8)"
          d="M0 0h13.929v13.929H0z"
        />
        <motion.path
          variants={pathVariants}
          transform="matrix(2.49 0 0 .82 544.68 369.24)"
          d="M-6.964-6.964H6.964V6.964H-6.964z"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(407.08 333.16)"
          d="M0 0h13.929v13.929H0z"
        />
        <motion.path
          variants={pathVariants}
          transform="matrix(5.27 0 0 1 440.69 386.5)"
          d="M-6.964-6.964H6.964V6.964H-6.964z"
        />
        <motion.path
          variants={pathVariants}
          transform="matrix(1.49 0 0 .83 549.5 325.19)"
          d="M-6.964-6.964H6.964V6.964H-6.964z"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(313.57 165.12)"
          d="M-80.398-8.571 33.093-75.556 80.398 9.841l-111.55 65.715z"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(314.61 166.39)"
          d="m-18.248 72.381-20.967 13.016h-4.914l-2.813-3.492L-95.558-1.27v-3.492l2.223-3.81L36.823-85.396h6.474l52.16 87.62.1 3.491-106.035 61.714"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(171.63 380.47)"
          d="m15.186-65.814-68.195 21.49v2.683l33.811 104.915 3.152 2.54L53.01 42.3z"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(244.4 354.3)"
          d="m-53.582-41.873 69.12-24.85L53.583 39.655v2.14l-68.768 24.928-2.58-1.399z"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(131.22 393.8)"
          d="m-14.613-54.97-6.59 3.685L13.18 54.505l2.292.464 5.73-2.483"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(284.97 340.51)"
          d="m-22.579-52.43 5.277-2.87 1.377 2.37L22.579 50.43l-2.115 2.86-6.95 2.01"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(190.32 317.73)"
          d="M-4.728 1.656S-.143-3.676 4.728-.81"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(195.55 330.5)"
          d="M-4.728 1.656S-.143-3.676 4.728-.81"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(200.78 350.46)"
          d="M-4.728 1.656S-.143-3.676 4.728-.81"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(210 376.47)"
          d="M-4.728 1.656S-.143-3.676 4.728-.81"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(206.01 364.1)"
          d="M-4.728 1.656S-.143-3.676 4.728-.81"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(197.63 342.67)"
          d="M-4.728 1.656S-.143-3.676 4.728-.81"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(221.67 409.64)"
          d="M-4.728 1.656S-.143-3.676 4.728-.81"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(216.46 396.12)"
          d="M-4.728 1.656S-.143-3.676 4.728-.81"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(102.72 459.05)"
          d="M-5.283-48.17c0 1.509-37.736 26.219-37.736 26.219L6.8 48.195l36.219-28.333S-5.283-49.68-5.283-48.17z"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(102.73 458.34)"
          d="m-11.712-57.12-36.604 26.053-1.51 4.841 59.018 82.12a2.943 2.943 0 0 0 4.135.652l34.112-25.129a5.863 5.863 0 0 0 1.315-8.099L-6.984-55.765a3.194 3.194 0 0 0-2.61-1.354z"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(690.33 262.82)"
          d="M-29.884-47.614-56.073-2.627a5.908 5.908 0 0 0 2.325 8.185l77.296 41.238a6.952 6.952 0 0 0 9.438-2.923L56.38-1.044a4.371 4.371 0 0 0-1.692-5.805l-6.374-3.678 2.868-5.702a3.79 3.79 0 0 0-1.68-5.09L15.8-38.291a2.496 2.496 0 0 0-3.255.932l-5.088 8.363L-14.83-42.47l-1.804 2.726a3.827 3.827 0 0 0 1.439 5.514L4.314-24.185l3.143-3.429L5.97-24.64a.531.531 0 0 0 .218.702l33.814 18.7a3.715 3.715 0 0 0 5.152-1.654l1.731-3.634"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(679.69 222.63)"
          d="M19.242 9.714-15.111-9.714l-4.131 1.785"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(693.55 266.52)"
          d="m3.388-10.456-7.146.871a7.343 7.343 0 0 0-6.058 4.912l-.107.312A11.956 11.956 0 0 0-7.968 6.95a9.284 9.284 0 0 0 10.78 2.815l.489-.2a11.766 11.766 0 0 0 6.677-7.074l.195-.571a7.272 7.272 0 0 0-1.828-7.59l-4.957-4.786"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(691.4 266.85)"
          d="M-4.179-20.213s-12.16.572-15.875 11.715c-3.714 11.143 2.409 19.127 2.409 19.127s6.609 12.18 22.609 9.608c16-2.572 16.286-23.02 16.286-23.02s0-9.144-10.857-15.144c-10.858-6-16 0-16 0"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(720.65 283.26)"
          d="M-7.508 19.203 6.801-8.49a6.337 6.337 0 0 0-2.732-8.544L-.15-19.203"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(655.84 255.27)"
          d="M17.917-14.09 2.235-23.164A3.334 3.334 0 0 0-2.36-21.88l-15.16 27.69a3.244 3.244 0 0 0 1.423 4.473l27.15 13.254a.754.754 0 0 0 1.011-1.005l-2.59-5.396a10.579 10.579 0 0 1-.338-8.37z"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(235.05 348.89)"
          d="M21.505 20.545 11.673 7.357-16.5-20.545s-5.928-.081-4.882 4.312c1.046 4.394 2.766 2.26 2.766 2.26L9.35 13.059z"
        />
        <motion.path
          variants={pathVariants}
          transform="translate(220.12 334.52)"
          d="m1.567-1.862-3.134 3.724"
        />
        <motion.path
          variants={pathVariants}
          d="m249.028 364.413.105-.001q.105 0 .21-.105.104-.105.313-.21.21-.104.314-.313l.314-.628.314-.627q.104-.21.104-.314 0-.105.105-.314l.106-.21"
        />
      </motion.svg>
    </ContSvg>
  );
};

const ContSvg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  #svg {
    width: 800px;
    height: 600px;
    margin: 0px auto;

    path {
      fill: none;
      stroke: #fff;
      stroke-width: 2px;
    }
  }
`;
