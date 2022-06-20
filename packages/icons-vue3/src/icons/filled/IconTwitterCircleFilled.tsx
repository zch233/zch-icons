// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TwitterCircleFilledSvg from 'icon-base/es/asn/TwitterCircleFilled';

export interface TwitterCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconTwitterCircleFilled: TwitterCircleFilledIconType = (props, context) => (
    <Icon name='TwitterCircleFilled' {...{ ...props, ...context.attrs }} icon={TwitterCircleFilledSvg} />
);

IconTwitterCircleFilled.displayName = 'IconTwitterCircleFilled';

export default IconTwitterCircleFilled;
