// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CopyrightCircleOutlinedSvg from 'gupo-icons-base/es/asn/CopyrightCircleOutlined';

export interface CopyrightCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCopyrightCircleOutlined: CopyrightCircleOutlinedIconType = (props, context) => (
    <Icon name='CopyrightCircleOutlined' {...{ ...props, ...context.attrs }} icon={CopyrightCircleOutlinedSvg} />
);

IconCopyrightCircleOutlined.displayName = 'IconCopyrightCircleOutlined';
IconCopyrightCircleOutlined.theme = 'outlined';
IconCopyrightCircleOutlined.originName = 'copyright-circle';

export default IconCopyrightCircleOutlined;
