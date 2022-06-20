// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UpSquareTwoToneSvg from 'icon-base/es/asn/UpSquareTwoTone';

export interface UpSquareTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconUpSquareTwoTone: UpSquareTwoToneIconType = (props, context) => (
    <Icon name='UpSquareTwoTone' {...{ ...props, ...context.attrs }} icon={UpSquareTwoToneSvg} />
);

IconUpSquareTwoTone.displayName = 'IconUpSquareTwoTone';

export default IconUpSquareTwoTone;
