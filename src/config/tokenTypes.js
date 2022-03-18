export default {
  sizing: {
    label: 'Size',
    property: 'Size',
    internal__Type: 'sizing',
    schema: {
      options: {
        description: '',
      },
    },
  },
  spacing: {
    label: 'Space',
    property: 'Value',
    internal__Type: 'spacing',
    schema: {
      options: {
        description: '',
      },
    },
  },
  color: {
    label: 'Color',
    property: 'Color',
    internal__Type: 'color',
    schema: {
      value: 'color',
      options: {
        description: '',
      },
    },
    help:
      "If a (local) style is found with the same name it will match to that, if not, will use hex value. Use 'Create Style' to batch-create styles from your tokens (e.g. in your design library). In the future we'll load all 'remote' styles and reference them inside the JSON.",
  },
  borderRadius: {
    label: 'Border Radius',
    property: 'Border Radius',
    internal__Type: 'borderRadius',
    schema: {
      options: {
        description: '',
      },
    },
  },
  borderWidth: {
    label: 'Border Width',
    property: 'Border Width',
    internal__Type: 'borderWidth',
    explainer: 'Enter as a number, e.g. 4',
    schema: {
      options: {
        description: '',
      },
    },
  },
  opacity: {
    label: 'Opacity',
    property: 'Opacity',
    internal__Type: 'opacity',
    explainer: 'Set as 50% or 0.5',
    schema: {
      options: {
        description: '',
      },
    },
  },
  boxShadow: {
    label: 'Box Shadow',
    property: 'Box Shadow',
    internal__Type: 'boxShadow',
    schema: {
      value: {
        x: '0',
        y: '0',
        blur: '0',
        spread: '0',
        color: '#000000',
        internal__Type: 'dropShadow',
      },
      options: {
        description: '',
      },
    },
  },
  typography: {
    label: 'Typography',
    property: 'Typography',
    internal__Type: 'typography',
    schema: {
      value: {
        fontFamily: 'Inter',
        fontWeight: 'Regular',
        lineHeight: 'AUTO',
        fontSize: '18',
        letterSpacing: '0%',
        paragraphSpacing: '0',
        textDecoration: 'none',
        textCase: 'none',
      },
      options: {
        description: '',
      },
    },
    help:
      "If a (local) style is found with the same name it will match to that, if not, will use raw font values. Use 'Create Style' to batch-create styles from your tokens (e.g. in your design library). In the future we'll load all 'remote' styles and reference them inside the JSON.",
  },
  fontFamilies: {
    help: 'Only works in combination with a Font Weight',
    label: 'Font Family',
    property: 'Font Family',
    internal__Type: 'fontFamilies',
    schema: {
      options: {
        description: '',
      },
    },
  },
  fontWeights: {
    help: 'Only works in combination with a Font Family',
    label: 'Font Weight',
    property: 'Font Weight',
    internal__Type: 'fontWeights',
    schema: {
      options: {
        description: '',
      },
    },
  },
  lineHeights: {
    label: 'Line Height',
    explainer: 'e.g. 100% or 14',
    property: 'Line Height',
    internal__Type: 'lineHeights',
    schema: {
      options: {
        description: '',
      },
    },
  },
  fontSizes: {
    label: 'Font Size',
    property: 'Font Size',
    internal__Type: 'fontSizes',
    schema: {
      options: {
        description: '',
      },
    },
  },
  letterSpacing: {
    label: 'Letter Spacing',
    property: 'Letter Spacing',
    internal__Type: 'letterSpacing',
    schema: {
      options: {
        description: '',
      },
    },
  },
  paragraphSpacing: {
    label: 'Paragraph Spacing',
    property: 'ParagraphSpacing',
    internal__Type: 'paragraphSpacing',
    schema: {
      options: {
        description: '',
      },
    },
  },
  textCase: {
    label: 'Text Case',
    property: 'TextCase',
    internal__Type: 'textCase',
    schema: {
      options: {
        description: '',
      },
    },
    explainer: 'none | uppercase | lowercase | capitalize',
  },
  textDecoration: {
    label: 'Text Decoration',
    property: 'TextDecoration',
    internal__Type: 'textDecoration',
    schema: {
      options: {
        description: '',
      },
    },
    explainer: 'none | underline | line-through',
  },
  other: {
    label: 'Other',
    property: 'other',
    internal__Type: 'other',
    schema: {
      options: {
        description: '',
      },
    },
  },
};
