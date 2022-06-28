// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SlackCircleFilledSvg from 'gupo-icons-base/es/asn/SlackCircleFilled';

export interface SlackCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSlackCircleFilled: SlackCircleFilledIconType = (props, context) => (
    <Icon name='SlackCircleFilled' {...{ ...props, ...context.attrs }} icon={SlackCircleFilledSvg} />
);

IconSlackCircleFilled.displayName = 'IconSlackCircleFilled';
IconSlackCircleFilled.theme = 'filled';
IconSlackCircleFilled.originName = 'slack-circle';

export default IconSlackCircleFilled;
