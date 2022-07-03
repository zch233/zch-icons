// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SaveFilledSvg from 'icons-base/es/asn/SaveFilled';

export interface SaveFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSaveFilled: SaveFilledIconType = (props, context) => <Icon name='SaveFilled' {...{ ...props, ...context.attrs }} icon={SaveFilledSvg} />;

IconSaveFilled.displayName = 'IconSaveFilled';
IconSaveFilled.theme = 'filled';
IconSaveFilled.originName = 'save';

export default IconSaveFilled;
