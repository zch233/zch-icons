// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BorderLeftOutlinedSvg from 'icons-base/es/asn/BorderLeftOutlined';

export interface BorderLeftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBorderLeftOutlined: BorderLeftOutlinedIconType = (props, context) => (
    <Icon name='BorderLeftOutlined' {...{ ...props, ...context.attrs }} icon={BorderLeftOutlinedSvg} />
);

IconBorderLeftOutlined.displayName = 'IconBorderLeftOutlined';
IconBorderLeftOutlined.theme = 'outlined';
IconBorderLeftOutlined.originName = 'border-left';

export default IconBorderLeftOutlined;
