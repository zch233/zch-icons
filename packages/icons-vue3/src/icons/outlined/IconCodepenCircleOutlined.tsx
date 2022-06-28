// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CodepenCircleOutlinedSvg from 'gupo-icons-base/es/asn/CodepenCircleOutlined';

export interface CodepenCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCodepenCircleOutlined: CodepenCircleOutlinedIconType = (props, context) => (
    <Icon name='CodepenCircleOutlined' {...{ ...props, ...context.attrs }} icon={CodepenCircleOutlinedSvg} />
);

IconCodepenCircleOutlined.displayName = 'IconCodepenCircleOutlined';
IconCodepenCircleOutlined.theme = 'outlined';
IconCodepenCircleOutlined.originName = 'codepen-circle';

export default IconCodepenCircleOutlined;
