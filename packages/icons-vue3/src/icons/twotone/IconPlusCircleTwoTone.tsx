// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PlusCircleTwoToneSvg from 'icon-base/es/asn/PlusCircleTwoTone';

export interface PlusCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPlusCircleTwoTone: PlusCircleTwoToneIconType = (props, context) => (
    <Icon name='PlusCircleTwoTone' {...{ ...props, ...context.attrs }} icon={PlusCircleTwoToneSvg} />
);

IconPlusCircleTwoTone.displayName = 'IconPlusCircleTwoTone';

export default IconPlusCircleTwoTone;
