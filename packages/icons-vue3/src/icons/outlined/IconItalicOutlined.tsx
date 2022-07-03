// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ItalicOutlinedSvg from 'icons-base/es/asn/ItalicOutlined';

export interface ItalicOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconItalicOutlined: ItalicOutlinedIconType = (props, context) => (
    <Icon name='ItalicOutlined' {...{ ...props, ...context.attrs }} icon={ItalicOutlinedSvg} />
);

IconItalicOutlined.displayName = 'IconItalicOutlined';
IconItalicOutlined.theme = 'outlined';
IconItalicOutlined.originName = 'italic';

export default IconItalicOutlined;
