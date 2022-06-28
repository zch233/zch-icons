// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import YuqueFilledSvg from 'gupo-icons-base/es/asn/YuqueFilled';

export interface YuqueFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconYuqueFilled: YuqueFilledIconType = (props, context) => <Icon name='YuqueFilled' {...{ ...props, ...context.attrs }} icon={YuqueFilledSvg} />;

IconYuqueFilled.displayName = 'IconYuqueFilled';
IconYuqueFilled.theme = 'filled';
IconYuqueFilled.originName = 'yuque';

export default IconYuqueFilled;
