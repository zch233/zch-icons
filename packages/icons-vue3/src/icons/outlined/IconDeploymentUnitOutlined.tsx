// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DeploymentUnitOutlinedSvg from 'gupo-icons-base/es/asn/DeploymentUnitOutlined';

export interface DeploymentUnitOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDeploymentUnitOutlined: DeploymentUnitOutlinedIconType = (props, context) => (
    <Icon name='DeploymentUnitOutlined' {...{ ...props, ...context.attrs }} icon={DeploymentUnitOutlinedSvg} />
);

IconDeploymentUnitOutlined.displayName = 'IconDeploymentUnitOutlined';
IconDeploymentUnitOutlined.theme = 'outlined';
IconDeploymentUnitOutlined.originName = 'deployment-unit';

export default IconDeploymentUnitOutlined;
