// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ApiFilledSvg from 'icon-base/es/asn/ApiFilled';

export interface ApiFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconApiFilled: ApiFilledIconType = (props, context) => <Icon name='ApiFilled' {...{ ...props, ...context.attrs }} icon={ApiFilledSvg} />;

IconApiFilled.displayName = 'IconApiFilled';

export default IconApiFilled;
