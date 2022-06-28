// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DiffOutlinedSvg from 'gupo-icons-base/es/asn/DiffOutlined';

export interface DiffOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDiffOutlined: DiffOutlinedIconType = (props, context) => <Icon name='DiffOutlined' {...{ ...props, ...context.attrs }} icon={DiffOutlinedSvg} />;

IconDiffOutlined.displayName = 'IconDiffOutlined';
IconDiffOutlined.theme = 'outlined';
IconDiffOutlined.originName = 'diff';

export default IconDiffOutlined;
