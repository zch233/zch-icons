// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PauseOutlinedSvg from 'gupo-icons-base/es/asn/PauseOutlined';

export interface PauseOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPauseOutlined: PauseOutlinedIconType = (props, context) => <Icon name='PauseOutlined' {...{ ...props, ...context.attrs }} icon={PauseOutlinedSvg} />;

IconPauseOutlined.displayName = 'IconPauseOutlined';
IconPauseOutlined.theme = 'outlined';
IconPauseOutlined.originName = 'pause';

export default IconPauseOutlined;
