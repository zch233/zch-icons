// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import InfoCircleFilledSvg from 'icons-base/es/asn/InfoCircleFilled';

export interface InfoCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconInfoCircleFilled: InfoCircleFilledIconType = (props, context) => (
    <Icon name='InfoCircleFilled' {...{ ...props, ...context.attrs }} icon={InfoCircleFilledSvg} />
);

IconInfoCircleFilled.displayName = 'IconInfoCircleFilled';
IconInfoCircleFilled.theme = 'filled';
IconInfoCircleFilled.originName = 'info-circle';

export default IconInfoCircleFilled;
