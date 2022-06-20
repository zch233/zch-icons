// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CodepenCircleOutlinedSvg from 'icon-base/es/asn/CodepenCircleOutlined';

export interface CodepenCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCodepenCircleOutlined: CodepenCircleOutlinedIconType = (props, context) => (
    <Icon name='CodepenCircleOutlined' {...{ ...props, ...context.attrs }} icon={CodepenCircleOutlinedSvg} />
);

IconCodepenCircleOutlined.displayName = 'IconCodepenCircleOutlined';

export default IconCodepenCircleOutlined;
