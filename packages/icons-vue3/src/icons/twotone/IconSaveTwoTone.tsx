// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SaveTwoToneSvg from 'icon-base/es/asn/SaveTwoTone';

export interface SaveTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSaveTwoTone: SaveTwoToneIconType = (props, context) => <Icon name='SaveTwoTone' {...{ ...props, ...context.attrs }} icon={SaveTwoToneSvg} />;

IconSaveTwoTone.displayName = 'IconSaveTwoTone';

export default IconSaveTwoTone;
