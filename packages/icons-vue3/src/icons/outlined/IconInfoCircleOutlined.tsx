// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import InfoCircleOutlinedSvg from 'icon-base/es/asn/InfoCircleOutlined';

export interface InfoCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconInfoCircleOutlined: InfoCircleOutlinedIconType = (props, context) => (
    <Icon name='InfoCircleOutlined' {...{ ...props, ...context.attrs }} icon={InfoCircleOutlinedSvg} />
);

IconInfoCircleOutlined.displayName = 'IconInfoCircleOutlined';

export default IconInfoCircleOutlined;
