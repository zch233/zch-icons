// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ApiFilledSvg from 'icons-base/es/asn/ApiFilled';

export interface ApiFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconApiFilled: ApiFilledIconType = (props, context) => <Icon name='ApiFilled' {...{ ...props, ...context.attrs }} icon={ApiFilledSvg} />;

IconApiFilled.displayName = 'IconApiFilled';
IconApiFilled.theme = 'filled';
IconApiFilled.originName = 'api';

export default IconApiFilled;
