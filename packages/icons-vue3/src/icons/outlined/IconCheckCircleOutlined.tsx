// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CheckCircleOutlinedSvg from 'icon-base/es/asn/CheckCircleOutlined';

export interface CheckCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCheckCircleOutlined: CheckCircleOutlinedIconType = (props, context) => (
    <Icon name='CheckCircleOutlined' {...{ ...props, ...context.attrs }} icon={CheckCircleOutlinedSvg} />
);

IconCheckCircleOutlined.displayName = 'IconCheckCircleOutlined';

export default IconCheckCircleOutlined;
