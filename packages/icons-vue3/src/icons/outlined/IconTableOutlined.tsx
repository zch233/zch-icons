// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TableOutlinedSvg from 'icons-base/es/asn/TableOutlined';

export interface TableOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTableOutlined: TableOutlinedIconType = (props, context) => <Icon name='TableOutlined' {...{ ...props, ...context.attrs }} icon={TableOutlinedSvg} />;

IconTableOutlined.displayName = 'IconTableOutlined';
IconTableOutlined.theme = 'outlined';
IconTableOutlined.originName = 'table';

export default IconTableOutlined;
