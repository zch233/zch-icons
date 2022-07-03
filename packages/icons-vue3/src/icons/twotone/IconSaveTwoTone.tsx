// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SaveTwotoneSvg from 'icons-base/es/asn/SaveTwotone';

export interface SaveTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSaveTwotone: SaveTwotoneIconType = (props, context) => <Icon name='SaveTwotone' {...{ ...props, ...context.attrs }} icon={SaveTwotoneSvg} />;

IconSaveTwotone.displayName = 'IconSaveTwotone';
IconSaveTwotone.theme = 'twotone';
IconSaveTwotone.originName = 'save';

export default IconSaveTwotone;
