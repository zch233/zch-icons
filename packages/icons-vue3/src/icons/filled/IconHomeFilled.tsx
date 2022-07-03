// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HomeFilledSvg from 'icons-base/es/asn/HomeFilled';

export interface HomeFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconHomeFilled: HomeFilledIconType = (props, context) => <Icon name='HomeFilled' {...{ ...props, ...context.attrs }} icon={HomeFilledSvg} />;

IconHomeFilled.displayName = 'IconHomeFilled';
IconHomeFilled.theme = 'filled';
IconHomeFilled.originName = 'home';

export default IconHomeFilled;
