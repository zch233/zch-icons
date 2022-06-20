// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CopyrightCircleOutlinedSvg from 'icon-base/es/asn/CopyrightCircleOutlined';

export interface CopyrightCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCopyrightCircleOutlined: CopyrightCircleOutlinedIconType = (props, context) => (
    <Icon name='CopyrightCircleOutlined' {...{ ...props, ...context.attrs }} icon={CopyrightCircleOutlinedSvg} />
);

IconCopyrightCircleOutlined.displayName = 'IconCopyrightCircleOutlined';

export default IconCopyrightCircleOutlined;
