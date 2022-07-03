// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import InfoCircleOutlinedSvg from 'icons-base/es/asn/InfoCircleOutlined';

export interface InfoCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconInfoCircleOutlined: InfoCircleOutlinedIconType = (props, context) => (
    <Icon name='InfoCircleOutlined' {...{ ...props, ...context.attrs }} icon={InfoCircleOutlinedSvg} />
);

IconInfoCircleOutlined.displayName = 'IconInfoCircleOutlined';
IconInfoCircleOutlined.theme = 'outlined';
IconInfoCircleOutlined.originName = 'info-circle';

export default IconInfoCircleOutlined;
