// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CloseSquareTwoToneSvg from 'icon-base/es/asn/CloseSquareTwoTone';

export interface CloseSquareTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCloseSquareTwoTone: CloseSquareTwoToneIconType = (props, context) => (
    <Icon name='CloseSquareTwoTone' {...{ ...props, ...context.attrs }} icon={CloseSquareTwoToneSvg} />
);

IconCloseSquareTwoTone.displayName = 'IconCloseSquareTwoTone';

export default IconCloseSquareTwoTone;
