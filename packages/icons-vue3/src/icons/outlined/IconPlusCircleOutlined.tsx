// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PlusCircleOutlinedSvg from 'icons-base/es/asn/PlusCircleOutlined';

export interface PlusCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPlusCircleOutlined: PlusCircleOutlinedIconType = (props, context) => (
    <Icon name='PlusCircleOutlined' {...{ ...props, ...context.attrs }} icon={PlusCircleOutlinedSvg} />
);

IconPlusCircleOutlined.displayName = 'IconPlusCircleOutlined';
IconPlusCircleOutlined.theme = 'outlined';
IconPlusCircleOutlined.originName = 'plus-circle';

export default IconPlusCircleOutlined;
