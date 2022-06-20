// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SaveFilledSvg from 'icon-base/es/asn/SaveFilled';

export interface SaveFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSaveFilled: SaveFilledIconType = (props, context) => <Icon name='SaveFilled' {...{ ...props, ...context.attrs }} icon={SaveFilledSvg} />;

IconSaveFilled.displayName = 'IconSaveFilled';

export default IconSaveFilled;
