// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BranchesOutlinedSvg from 'icons-base/es/asn/BranchesOutlined';

export interface BranchesOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBranchesOutlined: BranchesOutlinedIconType = (props, context) => (
    <Icon name='BranchesOutlined' {...{ ...props, ...context.attrs }} icon={BranchesOutlinedSvg} />
);

IconBranchesOutlined.displayName = 'IconBranchesOutlined';
IconBranchesOutlined.theme = 'outlined';
IconBranchesOutlined.originName = 'branches';

export default IconBranchesOutlined;
