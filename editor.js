( function (wp) {
    var registerBlockType = wp.blocks.registerBlockType;
    var el = wp.element.createElement;
    var Fragment = wp.element.Fragment;
    var InspectorControls = wp.blockEditor ? wp.blockEditor.InspectorControls : wp.editor.InspectorControls;
    var PanelBody = wp.components.PanelBody;
    var RangeControl = wp.components.RangeControl;
    var SelectControl = wp.components.SelectControl;
    var ColorPalette = wp.components.ColorPalette;
    var TextControl = wp.components.TextControl;
    var ToggleControl = wp.components.ToggleControl;

    registerBlockType('custom/divider', {
        title: 'Divider',
        description: 'A configurable divider / separator block.',
        icon: 'minus',
        category: 'design',
        supports: { anchor: true },
        attributes: {
            thickness: { type: 'number', default: 2 },
            color: { type: 'string', default: '#dddddd' },
            style: { type: 'string', default: 'solid' },
            width: { type: 'string', default: '100%' },
            alignment: { type: 'string', default: 'center' },
            vertical: { type: 'boolean', default: false },
        },
        edit: function (props) {
            var attributes = props.attributes;
            var setAttributes = props.setAttributes;

            function onChangeThickness(value) { setAttributes({ thickness: parseInt(value, 10) || 0 }); }
            function onChangeColor(value) { setAttributes({ color: value }); }
            function onChangeStyle(value) { setAttributes({ style: value }); }
            function onChangeWidth(value) { setAttributes({ width: value }); }
            function onChangeAlignment(value) { setAttributes({ alignment: value }); }
            function onToggleVertical(value) { setAttributes({ vertical: value }); }

            var dividerStyle = {
                border: attributes.vertical ? 'none' : '0',
                width: attributes.vertical ? 'auto' : attributes.width,
                height: attributes.vertical ? attributes.width : (attributes.thickness + 'px'),
                backgroundColor: attributes.vertical ? attributes.color : 'transparent',
                borderTop: attributes.vertical ? 'none' : (attributes.thickness + 'px ' + attributes.style + ' ' + attributes.color),
                display: 'block',
                marginLeft: attributes.alignment === 'left' ? '0' : (attributes.alignment === 'right' ? 'auto' : 'auto'),
                marginRight: attributes.alignment === 'left' ? 'auto' : (attributes.alignment === 'right' ? '0' : 'auto'),
            };

            return el(
                Fragment,
                null,
                el(
                    InspectorControls,
                    null,
                    el(
                        PanelBody,
                        { title: 'Divider Settings', initialOpen: true },
                        el(RangeControl, {
                            label: 'Thickness (px)',
                            value: attributes.thickness,
                            onChange: onChangeThickness,
                            min: 1,
                            max: 40
                        }),
                        el(SelectControl, {
                            label: 'Line style',
                            value: attributes.style,
                            options: [
                                { label: 'Solid', value: 'solid' },
                                { label: 'Dashed', value: 'dashed' },
                                { label: 'Dotted', value: 'dotted' },
                                { label: 'Double', value: 'double' }
                            ],
                            onChange: onChangeStyle
                        }),
                        el('div', { style: { marginTop: '12px' } }, el('label', null, 'Color')),
                        el(ColorPalette, { value: attributes.color, onChange: onChangeColor }),
                        el(TextControl, {
                            label: 'Width (e.g. 100%, 50%, 200px)',
                            value: attributes.width,
                            onChange: onChangeWidth
                        }),
                        el(SelectControl, {
                            label: 'Alignment',
                            value: attributes.alignment,
                            options: [
                                { label: 'Center', value: 'center' },
                                { label: 'Left', value: 'left' },
                                { label: 'Right', value: 'right' }
                            ],
                            onChange: onChangeAlignment
                        }),
                        el(ToggleControl, {
                            label: 'Vertical divider',
                            checked: attributes.vertical,
                            onChange: onToggleVertical
                        })
                    )
                ),
                el(
                    'div',
                    { className: props.className, style: { padding: '12px 0' } },
                    el('div', {
                        className: 'wp-block-custom-divider__preview',
                        style: dividerStyle,
                        'aria-hidden': 'true'
                    })
                )
            );
        },
        save: function (props) {
            var attrs = props.attributes;
            var isVertical = attrs.vertical;
            var styleObj = {};
            if (isVertical) {
                styleObj.backgroundColor = attrs.color;
                styleObj.width = attrs.width;
                styleObj.height = attrs.width;
                styleObj.display = 'inline-block';
            } else {
                styleObj.borderTop = attrs.thickness + 'px ' + attrs.style + ' ' + attrs.color;
                styleObj.width = attrs.width;
                styleObj.height = '0';
                styleObj.display = 'block';
            }
            // alignment via wrapper styles
            var wrapperStyle = { textAlign: attrs.alignment === 'left' ? 'left' : (attrs.alignment === 'right' ? 'right' : 'center') };

            return wp.element.createElement(
                'div',
                { className: 'wp-block-custom-divider', style: wrapperStyle },
                wp.element.createElement('div', {
                    role: 'separator',
                    'aria-orientation': isVertical ? 'vertical' : 'horizontal',
                    style: styleObj
                })
            );
        }
    });
} )(window.wp);
