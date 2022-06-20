// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DiffOutlinedSvg from 'icon-base/es/asn/DiffOutlined';

export interface DiffOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDiffOutlined: DiffOutlinedIconType = (props, context) => <Icon name='DiffOutlined' {...{ ...props, ...context.attrs }} icon={DiffOutlinedSvg} />;

IconDiffOutlined.displayName = 'IconDiffOutlined';

export default IconDiffOutlined;
