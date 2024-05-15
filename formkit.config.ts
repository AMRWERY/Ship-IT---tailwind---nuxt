import { en, ar } from "@formkit/i18n";
import { defineFormKitConfig } from "@formkit/vue";
import {
  createAutoAnimatePlugin,
  createAutoHeightTextareaPlugin,
  createFloatingLabelsPlugin,
  createMultiStepPlugin,
} from "@formkit/addons";
import "@formkit/addons/css/floatingLabels";
import "@formkit/addons/css/multistep";

export default defineFormKitConfig(() => {
  return {
    locales: { en, ar },
    locale: "en",
    plugins: [
      createAutoAnimatePlugin(
        {
          duration: 250,
          easing: "ease-in-out",
          delay: 0,
        },
        {
          global: ["outer", "inner"],
          form: ["form"],
          repeater: ["items"],
        }
      ),
      createAutoHeightTextareaPlugin(),
      createFloatingLabelsPlugin({
        useAsDefault: true,
      }),
      createMultiStepPlugin(),
    ],
  };
});
