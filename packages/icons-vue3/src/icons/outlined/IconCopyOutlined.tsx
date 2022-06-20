// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CopyOutlinedSvg from 'icon-base/es/asn/CopyOutlined';

export interface CopyOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCopyOutlined: CopyOutlinedIconType = (props, context) => <Icon name='CopyOutlined' {...{ ...props, ...context.attrs }} icon={CopyOutlinedSvg} />;

IconCopyOutlined.displayName = 'IconCopyOutlined';

export default IconCopyOutlined;
