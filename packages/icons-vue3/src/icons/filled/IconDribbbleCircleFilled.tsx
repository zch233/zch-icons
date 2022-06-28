// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DribbbleCircleFilledSvg from 'gupo-icons-base/es/asn/DribbbleCircleFilled';

export interface DribbbleCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDribbbleCircleFilled: DribbbleCircleFilledIconType = (props, context) => (
    <Icon name='DribbbleCircleFilled' {...{ ...props, ...context.attrs }} icon={DribbbleCircleFilledSvg} />
);

IconDribbbleCircleFilled.displayName = 'IconDribbbleCircleFilled';
IconDribbbleCircleFilled.theme = 'filled';
IconDribbbleCircleFilled.originName = 'dribbble-circle';

export default IconDribbbleCircleFilled;
