// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import QqCircleFilledSvg from 'gupo-icons-base/es/asn/QqCircleFilled';

export interface QqCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconQqCircleFilled: QqCircleFilledIconType = (props, context) => (
    <Icon name='QqCircleFilled' {...{ ...props, ...context.attrs }} icon={QqCircleFilledSvg} />
);

IconQqCircleFilled.displayName = 'IconQqCircleFilled';
IconQqCircleFilled.theme = 'filled';
IconQqCircleFilled.originName = 'qq-circle';

export default IconQqCircleFilled;
