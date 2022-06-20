// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import InfoCircleFilledSvg from 'icon-base/es/asn/InfoCircleFilled';

export interface InfoCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconInfoCircleFilled: InfoCircleFilledIconType = (props, context) => (
    <Icon name='InfoCircleFilled' {...{ ...props, ...context.attrs }} icon={InfoCircleFilledSvg} />
);

IconInfoCircleFilled.displayName = 'IconInfoCircleFilled';

export default IconInfoCircleFilled;
