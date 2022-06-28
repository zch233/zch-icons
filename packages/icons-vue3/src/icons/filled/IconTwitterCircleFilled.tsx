// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TwitterCircleFilledSvg from 'gupo-icons-base/es/asn/TwitterCircleFilled';

export interface TwitterCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTwitterCircleFilled: TwitterCircleFilledIconType = (props, context) => (
    <Icon name='TwitterCircleFilled' {...{ ...props, ...context.attrs }} icon={TwitterCircleFilledSvg} />
);

IconTwitterCircleFilled.displayName = 'IconTwitterCircleFilled';
IconTwitterCircleFilled.theme = 'filled';
IconTwitterCircleFilled.originName = 'twitter-circle';

export default IconTwitterCircleFilled;
