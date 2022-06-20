// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PlusSquareTwoToneSvg from 'icon-base/es/asn/PlusSquareTwoTone';

export interface PlusSquareTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPlusSquareTwoTone: PlusSquareTwoToneIconType = (props, context) => (
    <Icon name='PlusSquareTwoTone' {...{ ...props, ...context.attrs }} icon={PlusSquareTwoToneSvg} />
);

IconPlusSquareTwoTone.displayName = 'IconPlusSquareTwoTone';

export default IconPlusSquareTwoTone;
