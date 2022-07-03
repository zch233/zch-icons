// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AntCloudOutlinedSvg from 'icons-base/es/asn/AntCloudOutlined';

export interface AntCloudOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAntCloudOutlined: AntCloudOutlinedIconType = (props, context) => (
    <Icon name='AntCloudOutlined' {...{ ...props, ...context.attrs }} icon={AntCloudOutlinedSvg} />
);

IconAntCloudOutlined.displayName = 'IconAntCloudOutlined';
IconAntCloudOutlined.theme = 'outlined';
IconAntCloudOutlined.originName = 'ant-cloud';

export default IconAntCloudOutlined;
