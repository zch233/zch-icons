// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DownSquareTwotoneSvg from 'icons-base/es/asn/DownSquareTwotone';

export interface DownSquareTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDownSquareTwotone: DownSquareTwotoneIconType = (props, context) => (
    <Icon name='DownSquareTwotone' {...{ ...props, ...context.attrs }} icon={DownSquareTwotoneSvg} />
);

IconDownSquareTwotone.displayName = 'IconDownSquareTwotone';
IconDownSquareTwotone.theme = 'twotone';
IconDownSquareTwotone.originName = 'down-square';

export default IconDownSquareTwotone;
