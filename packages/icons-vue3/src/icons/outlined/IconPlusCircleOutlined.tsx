// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PlusCircleOutlinedSvg from 'icon-base/es/asn/PlusCircleOutlined';

export interface PlusCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPlusCircleOutlined: PlusCircleOutlinedIconType = (props, context) => (
    <Icon name='PlusCircleOutlined' {...{ ...props, ...context.attrs }} icon={PlusCircleOutlinedSvg} />
);

IconPlusCircleOutlined.displayName = 'IconPlusCircleOutlined';

export default IconPlusCircleOutlined;
