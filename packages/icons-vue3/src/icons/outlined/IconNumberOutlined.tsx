// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import NumberOutlinedSvg from 'icon-base/es/asn/NumberOutlined';

export interface NumberOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconNumberOutlined: NumberOutlinedIconType = (props, context) => (
    <Icon name='NumberOutlined' {...{ ...props, ...context.attrs }} icon={NumberOutlinedSvg} />
);

IconNumberOutlined.displayName = 'IconNumberOutlined';

export default IconNumberOutlined;
