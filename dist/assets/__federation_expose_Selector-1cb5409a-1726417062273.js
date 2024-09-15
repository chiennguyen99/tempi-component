import { importShared } from './__federation_fn_import-13825f49.js';
import { CustomElement } from './__federation_expose_Ui-9c46375a-1726417061888.js';

const DEFAULT_CUSTOM_ELEMENT = {
  text: "Custom element"
};

const {DeleteNode,DuplicateNode,OpenSettingDialog} = await importShared('@tempi/core-editor');

const React$2 = await importShared('react');

const QuickSetting = () => {
  return /* @__PURE__ */ React$2.createElement(React$2.Fragment, null, /* @__PURE__ */ React$2.createElement(OpenSettingDialog, null), /* @__PURE__ */ React$2.createElement(DuplicateNode, null), /* @__PURE__ */ React$2.createElement(DeleteNode, null));
};

const {InputConfig} = await importShared('@tempi/core-editor');

const React$1 = await importShared('react');

const Setting = () => {
  return /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, /* @__PURE__ */ React$1.createElement(
    InputConfig,
    {
      propKey: "text",
      formItemProps: { label: "Text", layout: "vertical" }
    }
  ));
};

const {withSelector} = await importShared('@tempi/core-editor');

const React = await importShared('react');
const CustomElementEditor = withSelector(
  (props) => {
    return /* @__PURE__ */ React.createElement(CustomElement, { ...props });
  },
  {
    displayName: "Custom element",
    tag: CustomElement?.displayName?.toLowerCase() || "",
    props: DEFAULT_CUSTOM_ELEMENT,
    quickSetting: QuickSetting,
    customAttributes: Setting,
    rules: {
      canDrag: () => true,
      canDrop: () => true
    }
  }
);

export { CustomElementEditor, CustomElementEditor as default };
