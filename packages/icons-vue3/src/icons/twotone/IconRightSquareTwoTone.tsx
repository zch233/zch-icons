// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RightSquareTwoToneSvg from 'icon-base/es/asn/RightSquareTwoTone';

export interface RightSquareTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconRightSquareTwoTone: RightSquareTwoToneIconType = (props, context) => (
    <Icon name='RightSquareTwoTone' {...{ ...props, ...context.attrs }} icon={RightSquareTwoToneSvg} />
);

IconRightSquareTwoTone.displayName = 'IconRightSquareTwoTone';

export default IconRightSquareTwoTone;
