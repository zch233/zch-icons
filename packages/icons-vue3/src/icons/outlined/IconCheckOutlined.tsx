// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CheckOutlinedSvg from 'icon-base/es/asn/CheckOutlined';

export interface CheckOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCheckOutlined: CheckOutlinedIconType = (props, context) => <Icon name='CheckOutlined' {...{ ...props, ...context.attrs }} icon={CheckOutlinedSvg} />;

IconCheckOutlined.displayName = 'IconCheckOutlined';

export default IconCheckOutlined;
