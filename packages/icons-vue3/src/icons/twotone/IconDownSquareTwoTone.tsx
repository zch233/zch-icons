// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DownSquareTwoToneSvg from 'icon-base/es/asn/DownSquareTwoTone';

export interface DownSquareTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDownSquareTwoTone: DownSquareTwoToneIconType = (props, context) => (
    <Icon name='DownSquareTwoTone' {...{ ...props, ...context.attrs }} icon={DownSquareTwoToneSvg} />
);

IconDownSquareTwoTone.displayName = 'IconDownSquareTwoTone';

export default IconDownSquareTwoTone;
