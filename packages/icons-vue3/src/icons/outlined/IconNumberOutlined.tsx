// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import NumberOutlinedSvg from 'icons-base/es/asn/NumberOutlined';

export interface NumberOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconNumberOutlined: NumberOutlinedIconType = (props, context) => (
    <Icon name='NumberOutlined' {...{ ...props, ...context.attrs }} icon={NumberOutlinedSvg} />
);

IconNumberOutlined.displayName = 'IconNumberOutlined';
IconNumberOutlined.theme = 'outlined';
IconNumberOutlined.originName = 'number';

export default IconNumberOutlined;
